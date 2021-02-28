import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiUrl } from "../../shared/constant/apiurl.constant";


@Injectable()

export class GenericService {

    headers = new HttpHeaders();

    constructor(
        private http: HttpClient,
        private apiUrl: ApiUrl
    ) {
        this.headers = this.headers.append('content-type', 'application/json');
        this.headers = this.headers.append('Authorization', this.apiUrl.authToken);
    }

    setToLocalStorage(value) {
        localStorage.setItem('BUDGET_ID', JSON.stringify(value));
    }

    getToLocalStorage() {
        return JSON.parse(localStorage.getItem('BUDGET_ID'));
    }

    getBudgetList() {
        const url = this.apiUrl.budget_url;

        return this.http.get(url,
            {
                headers: this.headers,
                responseType: 'json'
            })

    }

    getBudgetDetail(budgetId) {
        const url = `${this.apiUrl.budget_url}/${budgetId}`;

        return this.http.get(url,
            {
                headers: this.headers,
                responseType: 'json'
            })

    }


    getAcountList(budgetId: string) {
        const url = `${this.apiUrl.budget_url}/${budgetId}`;

        return this.http.get(url,
            {
                headers: this.headers,
                responseType: 'json'
            })

    }


    createAcount(payload) {
        const budgetId = payload['bid'];
        delete payload['bid'];
        const url = `${this.apiUrl.budget_url}/${budgetId}/accounts`;

        return this.http.post(url, payload,
            {
                headers: this.headers,
                responseType: 'json'
            })

    }





}