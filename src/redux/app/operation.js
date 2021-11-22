// import axios from 'axios';
// import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import { phonebookReducer } from './app-phonebook-reducer';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import {
//   getContactsRequest,
//   getContactsSuccess,
//   getContactsError,
//   addContactsRequest,
//   addContactsSuccess,
//   addContactsError,
//   deleteContactsRequest,
//   deleteontactsSuccess,
//   deleteContactsError,
// } from './operatin';

// axios.get('https://61935e66d3ae6d0017da850e.mockapi.io/contacts');

//youtu.be/xJ2cgRkR8D0?t=4941
//redux-toolkit.js.org/rtk-query/api/createApi

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61935e66d3ae6d0017da850e.mockapi.io/',
  }),
  endpoints: builder => ({
    fetchContact: builder.query({
      query: () => `/contacts`,
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),
    addContacts: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: { ...newContact },
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    deleteContacts: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
  }),
});

export const {
  useFetchContactQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} = contactsApi;
