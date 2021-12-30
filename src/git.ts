import * as io from "@actions/io";

io.cp(`${src}/.`, `${cwd}/.`, { recursive: true });
