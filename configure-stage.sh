#!/bin/bash
echo -e "\nabsoluteurl: https://help-stage.risevision.com/$1/_site/" >> _config_stage.yml
echo -e "\nbasehref: /$1/_site/" >> _config_stage.yml