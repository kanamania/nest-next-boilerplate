import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1675168826246 implements MigrationInterface {
    name = 'CreateUser1675168826246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` CHANGE \`modified_by\` \`modified_by\` int UNSIGNED NULL`);
        await queryRunner.query(`ALTER TABLE \`User\` CHANGE \`deleted_by\` \`deleted_by\` int UNSIGNED NULL`);
        await queryRunner.query(`ALTER TABLE \`User\` CHANGE \`updated_at\` \`updated_at\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`User\` CHANGE \`deleted_at\` \`deleted_at\` datetime NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` CHANGE \`deleted_at\` \`deleted_at\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`User\` CHANGE \`updated_at\` \`updated_at\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`User\` CHANGE \`deleted_by\` \`deleted_by\` int UNSIGNED NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`User\` CHANGE \`modified_by\` \`modified_by\` int UNSIGNED NULL DEFAULT 'NULL'`);
    }

}
