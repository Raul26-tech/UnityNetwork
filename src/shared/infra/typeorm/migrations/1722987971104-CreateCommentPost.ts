import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCommentPost1722987971104 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "comments",
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
            name: "content",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "post_id",
            type: "uuid",
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
            name: "FKPostLike",
            referencedTableName: "posts",
            referencedColumnNames: ["id"],
            columnNames: ["post_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
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
    await queryRunner.dropTable("comments");
  }
}
