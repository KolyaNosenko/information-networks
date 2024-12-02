import { Module } from '@nestjs/common';
import { LibraryController } from '../ui';
import { PrismaLibraryStorage } from '../infrastructure';
import { LibraryService, LibraryStorage } from '../services';
import { PapersService } from '../../papers/services';
import { PapersModule } from '../../papers/module';
import {
  AddLibraryEntryHandler,
  GetUserLibraryHandler,
  RemoveLibraryEntryHandler,
  UpdateLibraryEntryHandler,
} from '../operation';

@Module({
  imports: [PapersModule],
  providers: [
    PrismaLibraryStorage,
    {
      provide: LibraryService,
      inject: [PrismaLibraryStorage, PapersService],
      useFactory: (
        libraryStorage: LibraryStorage,
        papersService: PapersService,
      ) => {
        return new LibraryService(libraryStorage, papersService);
      },
    },
    {
      provide: AddLibraryEntryHandler,
      inject: [LibraryService],
      useFactory: (libraryService: LibraryService) => {
        return new AddLibraryEntryHandler(libraryService);
      },
    },
    {
      provide: GetUserLibraryHandler,
      inject: [LibraryService],
      useFactory: (libraryService: LibraryService) => {
        return new GetUserLibraryHandler(libraryService);
      },
    },
    {
      provide: RemoveLibraryEntryHandler,
      inject: [LibraryService],
      useFactory: (libraryService: LibraryService) => {
        return new RemoveLibraryEntryHandler(libraryService);
      },
    },
    {
      provide: UpdateLibraryEntryHandler,
      inject: [LibraryService],
      useFactory: (libraryService: LibraryService) => {
        return new UpdateLibraryEntryHandler(libraryService);
      },
    },
  ],
  controllers: [LibraryController],
})
export class LibraryModule {}
