

const App = (props) => {
	const title = 'React 쇼핑몰'
	const [query, setQuery] = useState('') //변수와 메서드
}

useEffect(async() => {
	await axios.get('../json/products.json')
}, [])

commitChange = value => {
	setQuery(value)
	setResultProducts(products.filter(v => v.title.includes(value)))
}