FROM zsf10838438/next_env:v2
RUN mkdir /workspace/next_app -p
COPY . /workspace/next_app
WORKDIR /workspace/next_app
RUN source /etc/profile \
&& npm install --unsafe-perm \
&& npm run start




