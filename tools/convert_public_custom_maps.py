#!/usr/bin/env python3
import argparse
from pathlib import Path
from custom_map_converter.main import run

p=argparse.ArgumentParser()
p.add_argument('--repo',type=Path,default=Path.cwd())
p.add_argument('--extracted',type=Path,required=True)
p.add_argument('--output',type=Path)
a=p.parse_args()
repo=a.repo.resolve()
ext=a.extracted.resolve()
out=a.output.resolve() if a.output else repo/'imports'/'custom-maps'
raise SystemExit(1 if run(repo,ext,out) else 0)
