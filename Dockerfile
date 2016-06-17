FROM ruby:2.3.0

ENV APP_HOME=/myapp
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

COPY Gemfile* $APP_HOME/
RUN bundle install

RUN apt-get update && \
    apt-get install -y \
      node \
      python-pygments \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/

COPY . $APP_HOME/
