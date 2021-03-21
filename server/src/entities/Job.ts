import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";
import { Suburb } from "./Suburb";
import { Category } from "./Category";
import { Contact } from "./Contact";

export enum JobStatus {
  New = "new",
  Accepted = "accepted",
  Declined = "declined",
  InProgress = "in-progress",
  Complete = "complete",
}

@Entity()
export class Job {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", default: JobStatus.New })
  status: JobStatus;

  @ManyToOne(() => Suburb, (suburb) => suburb.jobs, { nullable: false })
  suburb: Suburb;

  @RelationId((job: Job) => job.suburb)
  suburbId: string;

  @ManyToOne(() => Category, (category) => category.jobs, { nullable: false })
  category: Category;

  @RelationId((job: Job) => job.category)
  categoryId: string;

  @ManyToOne(() => Contact, (contact) => contact.jobs, { nullable: false })
  contact: Contact;

  @RelationId((job: Job) => job.contact)
  contactId: string;

  @Column({ type: "double" })
  price: number;

  @Column({ type: "varchar", length: 1000 })
  description: string;

  @UpdateDateColumn({ type: "timestamp" })
  created: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated: Date;
}
