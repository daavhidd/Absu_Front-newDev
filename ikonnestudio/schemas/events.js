export default {
    name: 'events',
    title: 'Events',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'News Title',
        type: 'string',
      },
      {
        name: 'newstext',
        title: 'News Text',
        type: 'string',
      },
      {
        name: 'dateposted',
        title: 'Date of post',
        type: 'string',
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      // {
      //   name: 'slug',
      //   title: 'Slug',
      //   type: 'string',
      //   options: {
      //     source: 'name',
      //     maxLength: 96,
      //   },
      // },
      
    ],
   
  }
  