export default {
    name: "project",
    title:"Project",
    type:"document",
    fields:[
         {
             name:"title",
             type:"string"
         },
         {
            name:"date",
            type:"datetime"
        },
        {
            name:"description",
            type:"text"
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        {
            name:"projectType",
            title:"Project Type",
            type:"string",
            options:{
                list:[
                    {value:"personal", title:"Personal"},
                    {value:"commercial", title:"Commercial"}
                ]
            }
        }
    ]
}