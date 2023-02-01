import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1675168375753 implements MigrationInterface {
  name = 'CreateUser1675168375753';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`User\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` int NOT NULL, \`created_by\` int UNSIGNED NOT NULL, \`modified_by\` int UNSIGNED NULL, \`deleted_by\` int UNSIGNED NULL, \`created_at\` datetime NOT NULL, \`updated_at\` datetime NULL, \`deleted_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`User\``);
  }
}
