console.clear();
import { from, of } from 'rxjs';
import { toArray, mergeAll, map, filter } from 'rxjs/operators';

of({ MK: 'jjj' })
  .pipe(
    filter(Boolean),
    map(Object.entries),
    map(v => from(v)),
    mergeAll(),
    map(([v, d]) => ({ v, d })),
    toArray()
  )
  .subscribe(console.log);
