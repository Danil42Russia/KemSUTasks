import React, { useCallback, useState } from 'react';
import './App.css';
import { Request } from './components/Request';
import { Endpoint } from './components/Endpoint';
import { Response } from './components/Response';
import { Code } from './components/Code';
import axios, { AxiosError } from 'axios';
import { IEndpoint, IResponse } from './models';

const endpoints: IEndpoint[] = [
  { name: 'LIST USERS', method: 'GET', url: '/api/users' },
  { name: 'SINGLE USER', method: 'GET', url: '/api/users/2' },
  { name: 'SINGLE USER NOT FOUND', method: 'GET', url: '/api/users/23' },
  {
    name: 'CREATE SINGLE USER',
    method: 'POST',
    url: '/api/users',
    data: {
      first_name: 'Романова',
      last_name: 'Василиса',
      email: 'romanova.vasilisa@example.com',
    },
  },
  {
    name: 'UPDATE SINGLE USER',
    method: 'PUT',
    url: '/api/users/9',
    data: {
      first_name: 'Павел',
    },
  },
  {
    name: 'UPDATE SINGLE USER',
    method: 'PATCH',
    url: '/api/users/3',
    data: {
      first_name: 'Волкова',
      email: 'volkova.stepanova@example.com',
    },
  },
  { name: 'DELETE SINGLE USER', method: 'DELETE', url: '/api/users/2' },
];

const baseURL = 'http://localhost:8080';

function App() {
  const [activeElement, setActiveElement] = useState<number>();
  const [endpoint, setEndpoint] = useState<IEndpoint>();
  const [response, setResponse] = useState<IResponse>();

  const onClickEndpoint = useCallback((key: number) => {
    if (activeElement === key) {
      return;
    }
    const endpoint = endpoints[key];

    setActiveElement(key);
    setEndpoint(endpoint);

    axios.request({
      baseURL,
      ...endpoint,
    }).then(response => {
      setResponse({ 'data': response?.data, 'status': response?.status });
    }).catch((error: AxiosError) => {
      setResponse({ 'data': error.response?.data, 'status': error.response?.status });
    });

  }, [activeElement]);

  return (
    <div className="App__container">
      <div className="App__endpoints">
        {
          endpoints.map((endpoint, index) => {
            return <Endpoint
              method={endpoint.method}
              name={endpoint.name}
              url={endpoint.url}
              key={index}
              onClick={_ => onClickEndpoint(index)}
              isActive={activeElement === index} />;
          })
        }
      </div>
      <div className="App__request">
        {
          endpoint ? <Request url={endpoint.url} baseURL={baseURL} /> : null
        }
        {
          endpoint?.data ? <Code text={endpoint?.data} /> : null
        }
      </div>
      <div className="App__response">
        {
          response?.status ? (
            <>
              <Response responseCode={response.status} />
              <Code text={response?.data ?? ''} />
            </>
          ) : null
        }
      </div>
    </div>
  );
}

export default App;
