new Vue({ //new ~의 형태로 복제, 생성할 수 있는 것 : instance
  el: '#app',
  data: {
    title: 'Vue | Page형식으로 맛보기',
    titleSub: '이미지 검색',
    search: '',
    isSearch: false,
    products: [],
    searchProducts: [], //검색결과
  },
  //beforeCreate - created - destroyed
  created() { //new Vue 만들어진 이후 초기 세팅
    axios.get('../json/products.json')
    .then((r) => {
      this.products = r.data;
      // function(r){} : this가 undefined, (r)=>{} : this가 vue
      this.searchProducts = this.products;
    })
    .catch(function(err){
      console.log(err)
    });
  },
  methods: {
    onSearchRemove(e) {
      this.search = ''; //vue는 변수값이 바뀌면 바뀜! 변수값을 바꾼다는 생각으로
      this.searchProducts = this.products
    },
    onSearch(e) {
      this.searchProducts = _.filter(this.products, (o) => o.title.includes(this.search) )
    }
  }
})