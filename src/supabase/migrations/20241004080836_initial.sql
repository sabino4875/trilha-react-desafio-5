create table posts (
    id uuid not null default gen_random_uuid(),
    title character varying not null,
    description character varying not null,
    body text not null,
    created_at timestamp with time zone not null default now(),
    last_modification timestamp without time zone not null default now(),
    constraint posts_pkey primary key (id)
  ) tablespace pg_default;

alter table posts enable row level security;

create policy "Enable read access for all users"
on posts
as PERMISSIVE
for SELECT
to public
using (
  true
);