import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Job } from "./Job";

@Entity()
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 20, nullable: false })
  name: string;

  @ManyToOne(() => Category, (childCategory) => childCategory.childCategories, {
    cascade: ["remove"],
    nullable: true,
  })
  parentCategory: Category;

  @OneToMany(() => Category, (childCategory) => childCategory.parentCategory, {
    nullable: true,
  })
  childCategories: Category[];

  @RelationId((category: Category) => category.parentCategory)
  parentCategoryId: string;

  @OneToMany(() => Job, (job) => job.contact)
  jobs: Job[];
}
