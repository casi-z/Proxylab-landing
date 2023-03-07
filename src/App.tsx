import { MarkdownString } from 'vscode'
import * as S from './App.style'
import Header from './layouts/Header/Header'
import Mainscreen from './layouts/Mainscreen/Mainscreen'

function App() {
	
	return (
		<>
			<Header />
			<Mainscreen/>
		</>
	)

}

export default App
