import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePosts1721780539539 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "posts",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isUnique: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "created_by",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_by",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "title",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "content",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "like_count",
            type: "float",
            isNullable: true,
          },
          {
            name: "comment_count",
            type: "float",
            isNullable: true,
          },
          {
            name: "user_id",
            type: "uuid",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: "FKUserPost",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("posts");
  }
}
