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

import { Event } from '../../../modules/event/domain'

import { Eventattendee } from '../../../modules/eventattendee/domain'

@Entity()
export class Attendee {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

firstName: string

@Column({})

lastName: string

@Column({})

email: string

@Column({})

status: string

@Column({})

eventId: string

@ManyToOne(
  () => Event,
  parent => parent.attendees,
  )
  @JoinColumn({ name: 'eventId' })

event?: Event

@OneToMany(
  () => Eventattendee,
  child => child.attendee,
  )

eventattendees?: Eventattendee[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
