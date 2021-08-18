import axios from 'axios'

import {Response} from './models/response'

axios.defaults.baseURL = 'http://localhost:3000'

export class Api {
  static fetchRepresentatives(state: string, isSenators: boolean) {
    return axios.get<Response>(
      `/${isSenators ? 'senators' : 'representatives'}/${state}`,
    )
  }
}
