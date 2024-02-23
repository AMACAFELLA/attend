import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

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
  phoneNumber: string

  @IsString()
  @IsNotEmpty()
  age: string

  @IsString()
  @IsNotEmpty()
  roomNumber: string

  @IsString()
  @IsNotEmpty()
  tShirtSize: string

  @IsString()
  @IsNotEmpty()
  teamColor: string

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
