import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';

import { AdminApp } from '@wsh-2024/admin/src/index';
import { ClientApp } from '@wsh-2024/app/src/index';

import { registerServiceWorker } from './utils/registerServiceWorker';

const main = async () => {
  await registerServiceWorker();

  const root = document.getElementById('root');

  if(root == null) {
    throw new Error('root elem none');
  }else if (window.location.pathname.startsWith('/admin')) {
      ReactDOM.createRoot(root).render(<AdminApp />);
  } else {
    ReactDOM.hydrateRoot(
      root,
      <SWRConfig value={{ revalidateIfStale: true, revalidateOnFocus: false, revalidateOnReconnect: false }}>
        <BrowserRouter>
          <ClientApp />
        </BrowserRouter>
      </SWRConfig>,
    );
  };
};

main().catch(console.error);
