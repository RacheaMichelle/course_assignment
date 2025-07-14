import { PartialType } from '@nestjs/mapped-types';
import { CreatePyamentCollectionDto } from './create-pyament_collection.dto';

export class UpdatePyamentCollectionDto extends PartialType(CreatePyamentCollectionDto) {}
