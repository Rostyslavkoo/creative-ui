export default {
  data: () => ({
    searchQuery: "",
    applicationData: [
      {
        _id: "21312312",
        number: "2",
        children_data: {
          name: "Богдан",
          age: 10,
        },
        parent_data: {
          name: "Ivan",
          phone_number: "+380507151254",
          email: "nfefiew@gmail.com",
        },
        message: "Хочу на урок",
        id_status: "200",
      },
      {
        _id: "2131231213",
        number: "1",
        children_data: {
          name: "Богдан",
          age: 1,
        },
        parent_data: {
          name: "Ivan",
          phone_number: "+380507151254",
          email: "nfefiew@gmail.com",
        },
        message: "Хочу на урок",
        id_status: "200",
      },
    ],
    columns: [
      {
        number: "number",
        field: "number",
        label: "Номер #",
        align: "left",
        sortable: false,
      },
      {
        number: "children_name",
        field: (row) => row.children_data.name,
        label: "Ім'я дитини",
        align: "left",
        sortable: false,
      },
      {
        number: "children_age",
        field: (row) => row.children_data.age,
        label: "Вік дитини",
        align: "left",
        format: val => `${val} років`,
        sortable: false,
      },
      {
        number: "parent_phone",
        field: (row) => row.parent_data.phone_number,
        label: "Номер телефону",
        align: "left",
        sortable: false,
      },
      {
        number: "parent_email",
        field: (row) => row.parent_data.email,
        label: "Email",
        align: "left",
        sortable: false,
      },
      {
        number: "arent_name",
        field: (row) => row.parent_data.name,
        label: "Ім'я дорослово",
        align: "left",
        sortable: false,
      },
      {
        number: "message",
        field: "message",
        label: "Повідомлення",
        align: "left",
        sortable: false,
      },
      {
        number: "status",
        field: "id_status",
        label: "Статус",
        align: "left",
        sortable: false,
      },
    ],
  }),
  mounted() {
    console.log(12312312);
  },
};
