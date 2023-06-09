import type { V2_MetaFunction } from '@remix-run/node';
import type { LinksFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesUrl }];

export default function IndexRoute() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">Read Jokes</Link>
            </li>
            <li>
              <Link reloadDocument to="/jokes.rss">
                RSS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};
