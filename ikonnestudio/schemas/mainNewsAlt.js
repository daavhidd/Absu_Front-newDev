export default {
    name: 'newsandmedia',
    title: 'News and Media',
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
        type: 'text',
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
      
      
    ],
   
  }
  