import Header from './components/Layout/Header';
import Banner from './components/Layout/Banner';
import SurveyContainer from './components/Survey/SurveyContainer';

function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <Banner />
      <main className="py-6">
        <SurveyContainer />
      </main>
    </div>
  );
}

export default App;
