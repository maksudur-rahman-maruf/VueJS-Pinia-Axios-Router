import { defineStore } from 'pinia'
import axios from 'axios'

export const useStatementStore = defineStore({
    id: 'statements',
    state: () => ({
        statements: []
    }),
    getters: {
        getStatements: (state) => {
            const str = 'default';
            return state.statements.find((str) => stmtTypes[0].stmtType === str)
        }
    },
    // actions: {
    //     async fetchStatements() {
    //         let response = await axios.get('http://ca-hypercube-st-01.infoimageinc.com:8580/infoservice/api/v1/document/fffc/search/all?acctNum=11111&acctType=NA&searchCriteria=[{%22key%22:%22startDate%22,%22operator%22:%22=%22,%22operand%22:%222021-02-10%22},{%22key%22:%22endDate%22,%22operator%22:%22=%22,%22operand%22:%222022-03-10%22}]&includeInserts=Y&includeClosed=true&vendor=infoimage', {
    //             headers: {
    //                 // 'x-apikey': '59a7ad19f5a9fa0808f11931',
    //                 // 'Access-Control-Allow-Origin': '*'
    //                 // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',

    //                 // "content-type": "application/pdf",
    //                 //  "clientIp": "10.1.0.189",

    //             }
    //         })
    //         this.statements = response.data


    //                  const res = await axios.get('https://httpbin.org/get', {
    //           headers: {
    //             'Test-Header': 'test-value'
    //           }
    //         });
    //           this.statements = await fetch('https://jsonplaceholder.typicode.com/users')
    //           .then((response) => response.json())
    //     }
    // }
})