import store from "../store/store";


const BASE_URL = 'http://3.7.81.243/projects/plie-api/public/api/';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

function formDataToQueryString(formData: any): string {
  const params = new URLSearchParams();
  formData.forEach(({value, key}:any) => {
    params.append(key, value.toString());
  });
  return params.toString();
}
let staticHeader = {};

store.subscribe(async () => {
  try {
    const userData = store.getState().user;

    if (userData) {
      staticHeader = {
        Authorization: `Bearer ${userData}`,
      };
    } else {
      staticHeader = {};
    }
  } catch (e) {
    console.error('Error accessing token:', e);
    staticHeader = {};
  }
});
export async function apiRequest<T>(
  endpoint: string,
  method: HttpMethod = 'GET',
  data: FormData | object | null = null,
  headers: Record<string, string> = {}
): Promise<T> {
  try {
    let url = `${BASE_URL}${endpoint}`;
    const options: RequestInit = {
      method,
      headers: {
        ...staticHeader,
        ...headers,
      }
    };

    if (method === 'GET' && data instanceof FormData) {
      const queryString = formDataToQueryString(data);
      url += `?${queryString}`;
    }

    if ((method === 'POST' || method === 'PUT') && data) {
      if (data instanceof FormData) {
        options.body = data;
      } else {
        options.body = JSON.stringify(data);
        (options.headers as Record<string, string>)['Content-Type'] = 'application/json';
      }
    }
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(errorDetails.message || 'Something went wrong');
    }

    return await response.json();
  } catch (error) {
    console.error('API request error:', (error as Error).message);
    throw error;
  }
}
