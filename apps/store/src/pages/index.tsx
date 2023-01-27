import { Button } from '@rbrtsmith-co/ui';

import { Hello } from '../components/hello';

export default function Home() {
  return (
    <div>
      <h1>Store</h1>
      <Hello />
      <Button>Click Me!</Button>
    </div>
  );
}
