import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class EventattendeeCreateDto {

@IsString()

@IsOptional()
  checkInTime?: string

@IsString()

@IsOptional()
  checkOutTime?: string

@IsString()

@IsOptional()
  eventId?: string

@IsString()

@IsOptional()
  attendeeId?: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

@IsString()

@IsOptional()
  dateUpdated?: string

}

export class EventattendeeUpdateDto {

@IsString()

@IsOptional()
  checkInTime?: string

@IsString()

@IsOptional()
  checkOutTime?: string

@IsString()

@IsOptional()
  eventId?: string

@IsString()

@IsOptional()
  attendeeId?: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

@IsString()

@IsOptional()
  dateUpdated?: string

}
