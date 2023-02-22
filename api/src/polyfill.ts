import { SelectQueryBuilder } from 'typeorm';
import { VIRTUAL_COLUMN_KEY } from './utils/virtualColumn';
import 'reflect-metadata';

declare module 'typeorm' {
  interface SelectQueryBuilder<Entity> {
    getMany(this: SelectQueryBuilder<Entity>): Promise<Entity[] | undefined>;
    getOne(this: SelectQueryBuilder<Entity>): Promise<Entity | undefined>;
  }
}

SelectQueryBuilder.prototype.getMany = async function () {
  const { entities, raw } = await this.getRawAndEntities();
  if (entities.length) {
    const items = entities.map((entitiy, index) => {
      const metaInfo = Reflect.getMetadata(VIRTUAL_COLUMN_KEY, entitiy) ?? {};
      const item = raw[index];

      for (const [propertyKey, name] of Object.entries<string>(metaInfo)) {
        entitiy[propertyKey] = item[name];
      }

      return entitiy;
    });

    return [...items];
  }
  return null;
};

SelectQueryBuilder.prototype.getOne = async function () {
  const { entities, raw } = await this.getRawAndEntities();
  if (entities.length) {
    const metaInfo = Reflect.getMetadata(VIRTUAL_COLUMN_KEY, entities[0]) ?? {};

    for (const [propertyKey, name] of Object.entries<string>(metaInfo)) {
      entities[0][propertyKey] = raw[0][name];
    }

    return entities[0];
  }
  return null;
};
