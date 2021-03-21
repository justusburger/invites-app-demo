import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Job } from "./Job";

@Entity()
export class Suburb {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 30, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 10, nullable: false })
  postcode: string;

  @OneToMany(() => Job, (job) => job.contact)
  jobs: Job[];
}
