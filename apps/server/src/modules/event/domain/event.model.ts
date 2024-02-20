import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User } from '../../../modules/user/domain'

import { Attendee } from '../../../modules/attendee/domain'

import { Eventattendee } from '../../../modules/eventattendee/domain'

@Entity()
export class Event {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

title: string

@Column({"nullable":true})

description?: string

@Column({})

userId: string

@ManyToOne(
  () => User,
  parent => parent.events,
  )
  @JoinColumn({ name: 'userId' })

user?: User

@OneToMany(
  () => Attendee,
  child => child.event,
  )

attendees?: Attendee[]

@OneToMany(
  () => Eventattendee,
  child => child.event,
  )

eventattendees?: Eventattendee[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
