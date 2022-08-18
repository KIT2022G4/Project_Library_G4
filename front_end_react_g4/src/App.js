
import Home_guess from "./Page/Home/Home_guess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home_guess />} />
          <Route path="detail" element={<Detail />} />
          <Route path="edit" element={<Customers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
