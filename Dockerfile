FROM ruby:2.3.0

RUN apt-get update
RUN apt-get install -y \
    node \
    python-pygments \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/

RUN mkdir /src
WORKDIR /src

ADD Gemfile /src/Gemfile
ADD Gemfile.lock /src/Gemfile.lock

RUN bundle install

EXPOSE 4000

ENTRYPOINT ["jekyll"]
