FROM ruby:2.3.1

ENV APP_HOME=/myapp
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ENV BUNDLE_GEMFILE=$APP_HOME/Gemfile \
    BUNDLE_JOBS=2 \
    BUNDLE_PATH=/bundle

COPY Gemfile* $APP_HOME/
RUN bundle install

RUN apt-get update && \
    apt-get install -y \
      node \
      python-pygments \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/

COPY . $APP_HOME/
