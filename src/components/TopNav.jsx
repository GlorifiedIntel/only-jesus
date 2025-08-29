'use client';
import Link from 'next/link';
import { Button, TextInput } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTheme } from 'next-themes';
import { dark, light } from '@clerk/themes';
import { useEffect, useState } from 'react';
import styles from '@/components/TopNav.module.css';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function TopNav() {
  const path = usePathname();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const searchParams = useSearchParams();

  // Handle search submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(searchParams.toString());
    urlParams.set('searchTerm', searchTerm);
    router.push(`/search?${urlParams.toString()}`);
  };

  // Sync searchTerm with URL
  useEffect(() => {
    const searchTermFromUrl = searchParams.get('searchTerm');
    if (searchTermFromUrl) setSearchTerm(searchTermFromUrl);
  }, [searchParams]);

  return (
    <nav className={styles.topnav}>
      {/* Search bar */}
      <form onSubmit={handleSubmit} className='flex items-center'>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>

      <div className='flex gap-2 md:order-2 items-center'>
        {/* Dark / Light mode toggle */}
        <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </Button>

        {/* Clerk Auth Buttons */}
        <SignedIn>
          <UserButton
            appearance={{
              baseTheme: theme === 'light' ? light : dark,
            }}
            userProfileUrl='/dashboard?tab=profile'
          />
        </SignedIn>
        <SignedOut>
          <SignInButton mode='redirect'>
            <Button className={styles.SignInButton}>Sign In</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}
