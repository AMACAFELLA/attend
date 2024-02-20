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

import { Attendee } from '../../../modules/attendee/domain'

@Entity()
export class Eventattendee {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({"nullable":true})

checkInTime?: string

@Column({"nullable":true})

checkOutTime?: string

@Column({})

eventId: string

@ManyToOne(
  () => Event,
  parent => parent.eventattendees,
  )
  @JoinColumn({ name: 'eventId' })

event?: Event

@Column({})

attendeeId: string

@ManyToOne(
  () => Attendee,
  parent => parent.eventattendees,
  )
  @JoinColumn({ name: 'attendeeId' })

attendee?: Attendee

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
