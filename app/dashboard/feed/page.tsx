import FeedItem from '@/components/feed/feed-item';
import SearchKeyword from '@/components/feed/search';
import WelcomeTitle from '@/components/feed/welcome-title';
import PageContainer from '@/components/layout/page-container';
import React from 'react';

const list = [
  {
    nickname: 'lafin',
    title: 'Hello World',
    content: 'This is a simple content'
  },
  {
    nickname: 'lafin',
    title: 'React Hooks',
    content: 'React Hooks is a new feature in React'
  }
];

async function FeedPage() {
  return (
    <PageContainer>
      <WelcomeTitle />
      <div className="flex flex-col gap-4">
        <SearchKeyword />
      </div>
      <div className="my-3 flex flex-col gap-4">
        {list.map((item, index) => (
          <FeedItem
            key={index}
            nickname={item.nickname}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </PageContainer>
  );
}

export default FeedPage;
