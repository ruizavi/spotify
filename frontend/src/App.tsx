import { BrowserRouter, Route, Routes } from "react-router-dom";
import LikeSong from "./components/app/main/like-song";
import Main from "./components/app/main/main";
import Signin from "./components/app/signin/signin";
import Signup from "./components/app/signup/signup";
import Protect from "./components/ui/protect";
import { AudioProvider } from "./context/audio-context";
import { PropsWithChildren } from "react";

function AppElement({ children }: PropsWithChildren) {
  return (
    <Protect>
      <AudioProvider>{children}</AudioProvider>
    </Protect>
  );
}

const AppPaths = {
  "/app": Main,
  "/app/collection/tracks": LikeSong,
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>hi!</h1>} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/signin" element={<Signin />} />
        {Object.entries(AppPaths).map(([path, Element]) => (
          <Route
            path={path}
            element={
              <AppElement>
                <Element />
              </AppElement>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
