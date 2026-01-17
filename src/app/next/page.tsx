/**
 * importing a lucide icon and putting it in the middle of the page
 **/

import { Camera } from 'lucide-react';

export default function NextPage() {
  return (
    <main className={styles.container}>

      <p><code>Camera color=&quot;red&quot; size={48}</code></p>
      <Camera color="yellow" size={48} />
    </main>
  );
}

import styles from './next.module.css';

