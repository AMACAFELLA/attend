import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class AttendeeCreateDto {

@IsString()

@IsNotEmpty()
  firstName: string

@IsString()

@IsNotEmpty()
  lastName: string

@IsString()

@IsNotEmpty()
  email: string

@IsString()

@IsNotEmpty()
  status: string

@IsString()

@IsOptional()
  eventId?: string

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

export class AttendeeUpdateDto {

@IsString()

@IsOptional()
  firstName?: string

@IsString()

@IsOptional()
  lastName?: string

@IsString()

@IsOptional()
  email?: string

@IsString()

@IsOptional()
  status?: string

@IsString()

@IsOptional()
  eventId?: string

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
