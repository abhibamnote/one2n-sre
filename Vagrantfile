Vagrant.configure("2") do |config|
    config.vm.box = "hashicorp/bionic64"
    config.vm.network "forwarded_port", guest: 8080, host: 8080
    config.vagrant.plugins = "vagrant-docker-compose"

    # install docker and docker-compose
    config.vm.provision :docker
    config.vm.provision :docker_compose

    config.vm.provider "virtualbox" do |vb|
        vb.customize ["modifyvm", :id, "--ioapic", "on"]
        vb.customize ["modifyvm", :id, "--memory", "2048"]
        vb.customize ["modifyvm", :id, "--cpus", "2"]
    end
end