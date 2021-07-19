import { mergeMap, map, catchError } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { GuitarsService } from './../services/guitars.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';

@Injectable()
export class ShopEffects {
  constructor(
    private actions$: Actions,
    private guitarsService: GuitarsService
  ) {}

  loadGuitars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.LoadItems),
      mergeMap(() =>
        this.guitarsService.getAll().pipe(
          map((guitars) => ({
            type: ActionTypes.LoadSuccess,
            payload: guitars,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
