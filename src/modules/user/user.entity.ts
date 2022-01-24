import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, JoinTable, ManyToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { UserDetails } from './user.details.entity';
import { Role } from '../role/role.entity';
import { LearningPath } from "../learning-path/learning-path.entity";
@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @OneToOne(type => UserDetails, { cascade: true, nullable: false, eager: true })
  @JoinColumn({ name: 'detail_id' })
  details: UserDetails;

  @ManyToMany(type => Role, role => role.users, { eager: true })
  @JoinTable({ name: 'user_roles' })
  roles: Role[];

  @ManyToMany(type => LearningPath, learningPath => learningPath.users)
  @JoinTable({
    name: "inscripcion",
    joinColumn: {
      name: "id_usuario",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "id_ruta",
      referencedColumnName: "id_ruta"
    }
  })
  learningPaths: LearningPath[];

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}