import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Job } from "./Job";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 20 })
  firstName: string;

  @Column({ type: "varchar", length: 20 })
  lastName: string;

  @Column({ type: "varchar", length: 50 })
  email: string;

  @Column({ type: "varchar", length: 20 })
  phone: string;

  @OneToMany(() => Job, (job) => job.contact)
  jobs: Job[];
}
