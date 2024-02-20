import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class EventCreateDto {

@IsString()

@IsNotEmpty()
  title: string

@IsString()

@IsOptional()
  description?: string

@IsString()

@IsOptional()
  userId?: string

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

export class EventUpdateDto {

@IsString()

@IsOptional()
  title?: string

@IsString()

@IsOptional()
  description?: string

@IsString()

@IsOptional()
  userId?: string

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
