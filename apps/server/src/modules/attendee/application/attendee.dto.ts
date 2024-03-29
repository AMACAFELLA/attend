import { IsNotEmpty, IsOptional, IsString, IsBoolean } from 'class-validator'

export class AttendeeCreateDto {
  @IsString()
  @IsNotEmpty()
  firstName: string

  @IsString()
  @IsNotEmpty()
  lastName: string

  @IsString()
  @IsOptional()
  email: string

  @IsString()
  @IsOptional()
  phoneNumber: string

  @IsString()
  @IsOptional()
  age: string

  @IsString()
  @IsOptional()
  roomNumber: string

  @IsString()
  @IsOptional()
  tShirtSize: string

  @IsString()
  @IsOptional()
  teamColor: string

  @IsString()
  @IsNotEmpty()
  status: string

  @IsBoolean()
  @IsOptional()
  keyTaken?: boolean

  @IsString()
  @IsOptional()
  keyHolder?: string

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
  phoneNumber?: string

  @IsString()
  @IsOptional()
  age?: string

  @IsString()
  @IsOptional()
  roomNumber?: string

  @IsString()
  @IsOptional()
  tShirtSize?: string

  @IsString()
  @IsOptional()
  teamColor?: string

  @IsString()
  @IsOptional()
  status?: string

  @IsBoolean()
  @IsOptional()
  keyTaken?: boolean

  @IsString()
  @IsOptional()
  keyHolder?: string

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
