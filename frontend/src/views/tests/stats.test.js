import '@testing-library/jest-dom';
import { render, screen, waitFor, act } from '@testing-library/react';
import { QueryParamProvider } from 'use-query-params';
import { ReachAdapter } from 'use-query-params/adapters/reach';

import { ReduxIntlProviders } from '../../utils/testWithIntl';
import { store } from '../../store';

import { Stats } from '../stats';

describe('Overall styats page', () => {
  it('renders all headings for Tasks Statistics', () => {
    act(() => {
      store.dispatch({ type: 'SET_TOKEN', token: 'validToken' });
    });
    render(
      <QueryParamProvider adapter={ReachAdapter}>
        <ReduxIntlProviders>
          <Stats />
        </ReduxIntlProviders>
      </QueryParamProvider>,
    );
    waitFor(() => expect(screen.getByText('101367027')).toBeInTheDocument());
    waitFor(() => expect(screen.getByText('2380562')).toBeInTheDocument());
    expect(
      screen.getByRole('heading', {
        name: 'Statistics',
      }),
    );
    expect(
      screen.getByRole('heading', {
        name: /tasks statistics/i,
      }),
    );
    expect(
      screen.getByRole('heading', {
        name: /new users/i,
      }),
    );
    expect(
      screen.getByRole('heading', {
        name: /total features/i,
      }),
    );
  });
});
