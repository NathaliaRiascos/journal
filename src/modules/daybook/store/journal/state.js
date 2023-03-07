
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum fugiat magnam possimus exercitationem provident, iusto veniam',
            picture: null
        },
        {
            id: new Date().getTime() + 100,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum fugiat magnam possimus exercitationem provident, iusto veniam',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum fugiat magnam possimus exercitationem provident, iusto veniam',
            picture: null
        }
    ]
})

